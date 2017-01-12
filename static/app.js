/**
 * Created by joke on 17/1/11.
 */
var app = new Vue({
    el:"#app",
    data: {
        message: "hello ann!"
    }
});

var rawHtml = new Vue({
   el:"#rawHtml",
    data:{
        rawHtml:"<p>hello</p>"
    }
});

app.$watch('message',function(newVal,oldVal){
   console.log(newVal,oldVal)
});

var classBind = new Vue({
    el:"#classBind",
    data:{
        isActive:true,
        hasError:null
    },
    computed:{
        classObject:function(){
            return {
                active:this.isActive && !this.hasError,
                'text-danger':this.hasError && this.hasError.type==='fatal'
            }
        }
    }
});

var toggle = new Vue({
    el:"#toggle",
    data:{
        loginType:'Email'
    },
    methods:{
        toggleLoginType:function(){
            return this.loginType = this.loginType==='username' ? 'email':'username'
        }
    }
});

Vue.component('todo-item',{
    template:'\
    <li>\
        {{title}}\
        <button v-on:click="$emit(\'remove\')">X</button>\
        </li>\
        ',
    props:['title']
});

var todo = new Vue({
    el:'#todo-list-example',
    data:{
        newTodoText:'',
        todos:[
            'Do the dishes',
            'Take out the trash',
            'Mow the lawn'
        ]
    },

    methods:{
            addNewTodo:function(){
                this.todos.push(this.newTodoText);
                this.newTodoText = ''
            }
        }

});

var vModel = new Vue({
    el:"#vModel",
    data:{
        message:''
    }
});

var mutilCheck = new Vue({
    el:"#mutilCheck",
    data:{
        checkedNames:[]
    }
});

var radio = new Vue({
    el:"#radio",
    data:{
        picked:''
    }

});

var seletc = new Vue({
    el:"#select",
    data:{
        selected:''
    }
});


Vue.component('simple-counter',{
    template:'<button v-on:click="counter +=1">{{counter}}</button>',
    data:function(){
        return {
            counter:0
        }
    }
}

);

var component = new Vue({
    el:"#componentData"
});