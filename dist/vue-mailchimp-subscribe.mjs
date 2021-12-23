import s from"jsonp";import t from"query-string";export default{props:{url:{required:!0,type:String},userId:{required:!0,type:String},listId:{required:!0,type:String}},data:function(){return{email:null,success:!1,error:null,loading:!1}},computed:{data:function(){return t.stringify({u:this.userId,id:this.listId,EMAIL:this.email})}},methods:{setEmail:function(s){void 0===s&&(s=""),this.email=s.trim()},subscribe:function(){null===this.email||this.loading||(this.$emit("start"),this.success=!1,this.error=null,this.loading=!0,this.message=null,s(this.url+"?"+this.data,{param:"c"},this.onResponse))},onResponse:function(s,t){this.loading=!1,s&&(this.error=s),t&&"success"!==t.result&&(this.error=this.formatErrorMessage(t.msg)),this.error?this.$emit("error",this.error):(this.success=!0,this.email=null,this.message=t.msg,this.$emit("success",this.message))},formatErrorMessage:function(s){return s.replace("0 - ","")}},render:function(){return this.$scopedSlots.default({subscribe:this.subscribe,setEmail:this.setEmail,error:this.error,success:this.success,loading:this.loading,message:this.message})}};
//# sourceMappingURL=vue-mailchimp-subscribe.mjs.map
