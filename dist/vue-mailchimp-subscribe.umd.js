!function(e,s){"object"==typeof exports&&"undefined"!=typeof module?module.exports=s(require("jsonp"),require("query-string")):"function"==typeof define&&define.amd?define(["jsonp","query-string"],s):e.vueMailchimpSubscribe=s(e.jsonp,e.queryString)}(this,function(e,s){return e=e&&e.hasOwnProperty("default")?e.default:e,s=s&&s.hasOwnProperty("default")?s.default:s,{props:{url:{required:!0,type:String},userId:{required:!0,type:String},listId:{required:!0,type:String}},data:function(){return{email:null,success:!1,error:null,loading:!1}},computed:{data:function(){return s.stringify({u:this.userId,id:this.listId,EMAIL:this.email})}},methods:{setEmail:function(e){void 0===e&&(e=""),this.email=e.trim()},subscribe:function(){null===this.email||this.loading||(this.success=!1,this.error=null,this.loading=!0,this.message=null,e(this.url+"?"+this.data,{param:"c"},this.onResponse))},onResponse:function(e,s){this.loading=!1,e&&(this.error=e),s&&"success"!==s.result&&(this.error=this.formatErrorMessage(s.msg)),this.error?this.$emit("error",this.error):(this.success=!0,this.email=null,this.message=s.msg,this.$emit("success",this.message,s,e))},formatErrorMessage:function(e){return e.replace("0 - ","")}},render:function(){return this.$scopedSlots.default({subscribe:this.subscribe,setEmail:this.setEmail,error:this.error,success:this.success,loading:this.loading,message:this.message})}}});
//# sourceMappingURL=vue-mailchimp-subscribe.umd.js.map
