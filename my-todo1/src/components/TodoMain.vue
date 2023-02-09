<template>
    <div class="page">
      <header><h1>Vue Fire todo1</h1></header>
          <main>
          <div class="todos">
                <div class="write">
                <input type="text" v-model="addItemText"/>
                <button class="btn add" @click="addItem">Add</button>
                </div>
                <ul class="list">
                    <li v-for="(list, i) in todos" :key="list.text">
                        <i :class="[list.state === 'yet' ? 'far' : 'fas', 'fa-check-square']"></i>
                        <span>
                        {{ list.text }}
                        <b>
                            <a href="">Edit</a>
                            <a href="">Del</a>
                        </b>
                        </span>
                    </li>
                </ul>
          </div>
          </main>
      </div>
  </template>
  
  <script>
  export default {
    data(){
          return{
            addItemText: '',
            todos:[
                {text: '공부하기', state: 'yet'},
                {text: '운동하기', state: 'done'},
                {text: '글쓰기', state: 'done'},
            ]
          }
      },
    methods: {
        addItem(){
            console.log(this.addItemText)
            this.todos.push({
                text: this.addItemText,
                state: 'yet'
            })
        }
    }
    }
  
  </script>
  
  <style>
  
  </style>