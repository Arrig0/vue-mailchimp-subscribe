function s(s){return s&&"object"==typeof s&&"default"in s?s.default:s}var e=s(require("jsonp")),r=s(require("query-string")),i={props:{url:{required:!0,type:String},userId:{required:!0,type:String},listId:{required:!0,type:String}},data:function(){return{email:null,success:!1,error:null,loading:!1}},computed:{data:function(){return r.stringify({u:this.userId,id:this.listId,EMAIL:this.email})}},methods:{setEmail:function(s){void 0===s&&(s=""),this.email=s.trim()},subscribe:function(){null===this.email||this.loading||(this.success=!1,this.error=null,this.loading=!0,this.message=null,e(this.url+"?"+this.data,{param:"c"},this.onResponse))},onResponse:function(s,e){this.loading=!1,s&&(this.error=s),e&&"success"!==e.result&&(this.error=this.formatErrorMessage(e.msg)),this.error?this.$emit("error",this.error):(this.success=!0,this.email=null,this.message=e.msg,this.$emit("success",this.message,e,s))},formatErrorMessage:function(s){return s.replace("0 - ","")}},render:function(){return this.$scopedSlots.default({subscribe:this.subscribe,setEmail:this.setEmail,error:this.error,success:this.success,loading:this.loading,message:this.message})}};module.exports=i;
//# sourceMappingURL=vue-mailchimp-subscribe.js.map