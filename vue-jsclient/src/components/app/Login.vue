<template>
    <div class = "w-login-modal">
        <div class="w-login" ref="windowRef">

            <div class="header" ref="headerRef">
                <span>Login</span>
            </div>

            <div>
                <form @submit.prevent="login">
                    <div class="form-group row">
                        <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                        <div class="col-md-6">
                            <input id="email" type="email" class="form-control" name="email" required autocomplete="email" autofocus v-model="post.email">
                        </div>
                    </div>

                    <div class="form-group row">
                        <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                        <div class="col-md-6">
                            <input id="password" type="password" class="form-control" name="password" required autocomplete="current-password" v-model="post.password">
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-6 offset-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" name="remember" id="remember" v-model="post.remember">

                                <label class="form-check-label" for="remember">
                                    Remember Me
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row mb-0">
                        <div class="col-md-8 offset-md-4">
                            <my-button :type="submit">Login</my-button>
                        </div>
                    </div>
                </form>
            </div>

            <div class="bottom-line">
            </div>

        </div>
    </div>
</template>

<script>

	import Button from '@/components/base/Button';

    export default {
        name: "my-login",
        components: {
        	'my-button': Button
        },
        props: {},
        created() {
	        this.EMIT = 'loginWindows',
		    this.URI  = this.$url.getUrl("login")

        },
        mounted() {
	        this.post= {email:  "adresa@email.ro", password: "12345" };
	        this.$vanilla.dragDiv(this.$refs.windowRef, this.$refs.headerRef);
        },
        methods: {
        	login: function (){
		        console.log('chem de doua ori procedura LOGIN -->');

		        // this.$emit(this.EMIT);

		        this.axios.post(this.URI, this.post).then((response) => {
				        if(response.data.succes){
					        this.isLogin = true;
					        this.$emit(this.EMIT);
				        }else{
					        this.isLogin = false;
					        this.$emit(this.EMIT);
				        }
			        }
		        );
            }
        },
        data() {
	        return {
		        post:{},
		        isLogin: false
	        }
        }
    }
</script>

<style scoped></style>
