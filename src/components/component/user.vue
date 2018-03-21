<template>
  <div>
      {{dasta}}
  </div>
</template>
<script>
export default {
  data(){
      return{
          dasta:''
      }
  },
  watch:{
      '$route'(to,from){
          this.changeId();
      }
  },
  methods:{
      changeId(){
          this.dasta="当前进来的ID:"+this.$route.params.id;
      }
  },
  created(){
      this.changeId();
  }
}
</script>
<style>

</style>


