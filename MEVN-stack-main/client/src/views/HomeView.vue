<template>
  <v-app id="inspire">
    <br><br>
    <v-main>
      <v-container class="scroll-y" fluid>
        <v-row align="center" justify="center">
          <v-col cols="8" md="8">
            <v-card class="ml-5 mr-5">
              <v-app-bar dark color="#2C3A47">
                <v-btn icon>
                  <v-icon>local_offer</v-icon>
                </v-btn>
                <v-toolbar-title>Posts</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" persistent max-width="800px">
                  <template v-slot:activator="{ on }">
                    <v-btn color="red" v-on="on" outlined="">
                      <v-icon left>add</v-icon> ADD
                    </v-btn>
                  </template>
                  <v-card>
                    <v-form @submit.prevent="savePost" ref="postData" lazy-validation enctype="multipart/form-data"
                      autocomplete="off">
                      <v-card-title>
                        <span class="headline">Posts</span>
                      </v-card-title>
                      <v-card-text>
                        <v-container grid-list-md>
                          <v-layout wrap>
                            <v-flex xs12 sm12 md12>
                              <v-text-field label="Name*" v-model="postData.name" color="#2C3A47"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm12 md12>
                              <v-text-field label="Description" v-model="postData.description"
                                color="#2C3A47"></v-text-field>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="#2C3A47" dark @click="close" outlined small>
                          <v-icon left>exit_to_app</v-icon> Close
                        </v-btn>
                        <v-btn color="light-green darken-4" dark type="submit" outlined small>
                          <v-icon left>save</v-icon> {{ saveDialog }}
                        </v-btn>
                      </v-card-actions>
                    </v-form>
                  </v-card>
                </v-dialog>
              </v-app-bar>
              <v-container>
                <v-card class="mx-auto elevation-19">
                  <v-card-title>
                    <v-spacer></v-spacer>
                    <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details
                      color="#2C3A47">
                    </v-text-field>
                  </v-card-title>
                  <v-data-table item-key="id" :headers="headers" :items="posts" :search="search">
                    <template v-slot:[`item.actions`]="{ item }">
                      <v-icon icon="fa:fas fa-edit"></v-icon>
                      <v-btn color="success" class="mx-2" fab x-small @click="editPost(item)" outlined>
                        <v-icon small>mdi-pencil</v-icon>
                      </v-btn>
                      <v-btn color="pink" fab x-small @click="deletePost(item._id)" outlined>
                        <v-icon small>mdi-delete</v-icon>
                      </v-btn>
                    </template>
                    <template v-slot:no-results>
                      <v-alert :value="true" color="pink" icon="warning" dark>
                        Your Search {{ search }} does not exist.
                      </v-alert>
                    </template>

                  </v-data-table>
                </v-card>
              </v-container>
            </v-card>
            <v-snackbar v-model="snackbar" top right :color="color">
              {{ text }}
              <v-btn color="black" text @click="snackbar = false">

              </v-btn>

            </v-snackbar>
          </v-col>

        </v-row>

      </v-container>
    </v-main>
    <v-btn v-scroll="onScroll" bottom color="red" dark fab fixed right @click="toTop">
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>


<script>
import axios from "axios";
export default {
  props: {
    source: String
  },
  data: () => ({
    mini: false,
    dialog: false,
    fab: false,
    search: '',
    snackbar: false,
    text: '',
    color: '',
    posts: [],
    headers: [
      { text: 'Name', value: 'name', sortable: true },
      { text: 'Description', value: 'description', sortable: false },
      { text: 'Action', value: 'actions', sortable: true, width: '180px' },
    ],
    postData: {
      name: '',
      description: ''
    },
    default: {
      name: '',
      description: ''
    },
    editedIndex: -1,
  }),
  watch: {
    dialog(val) {
      val || this.close()
    }
  },
  computed: {
    saveDialog() {
      return this.editedIndex === -1 ? 'Save' : 'Edit'
    }
  },
  mounted() {
    this.loadPosts();
  },
  methods: {
    loadPosts: async function () {
      let apiURL = '/api';
      axios.get(apiURL).then(res => {
        this.posts = res.data;
      }).catch(error => {
        console.log(error)
      });
    },
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
    close() {
      this.dialog = false
      setTimeout(() => {
        this.postData = Object.assign({}, this.default)
        this.editedIndex = -1
      }, 300)
    },
    savePost: async function () {
      if (this.editedIndex > -1) {
        this.updatePost();
      } else {
        this.createPost();
      }
    },
    createPost() {
      let apiURL = '/api/create-post';
      axios.post(apiURL, this.postData).then(() => {
        this.postData = {
          name: '',
          description: '',
        }
        this.close();
        this.loadPosts();
        this.color = 'success'
        this.text = 'Post has been successfully saved.'
        this.snackbar = true;
      }).catch(error => {
        console.log(error)
      });
    },
    editPost(item) {
      this.editedIndex = this.posts.indexOf(item)
      this.postData = Object.assign({}, item)
      this.dialog = true
    },
    updatePost() {
      let apiURL = `/api/update-post/${this.postData._id}`;
      axios.put(apiURL, this.postData).then((res) => {
        console.log(res)
        this.close();
        this.loadPosts();
        this.color = 'info'
        this.text = 'Post has been modified.'
        this.snackbar = true;
      }).catch(error => {
        console.log(error)
        console.log(this.$route.params.id)
      })
    },
    deletePost(id) {
          try {
            let apiURL = `/api/delete-post/${id}`;
            let indexOfArrayItem = this.posts.findIndex(i => i._id === id);
            axios.delete(apiURL).then(() => {
              this.posts.splice(indexOfArrayItem, 1);
            }).catch(error => {
              console.log(error)
            });
          } catch (error) {
            alert(error)
          }

    },
  },
}
</script>