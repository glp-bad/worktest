<template>
    <div class = "w-login-modal">
        <div class="w-login" ref="windowRef">

            <div class="header" ref="headerRef">
                <span>Login</span>
            </div>

            <div class="content">

                <form @submit.prevent="logOn">
                    <table class="ff-form-table">
                        <tr>
                            <td class="label-left bold">
                                <label for="email">E-Mail Address</label></td>
                            <td class="control">
                                <input id="email" type="email" size="30" name="email" required autocomplete="email" autofocus v-model="post.email">
                            </td>
                        </tr>
                        <tr>
                            <td class="label-left bold">
                                <label for="password" >Password</label></td>
                            <td class="control">
                                <input id="password" type="password" size="30" name="password" required autocomplete="current-password" v-model="post.password">
                            </td>
                        </tr>
                        <tr >
                            <td colspan="2">
                                <br>
                                <input  type="checkbox" name="remember" id="remember" v-model="post.remember">
                                <label  for="remember" class="label-left bold">
                                    Remember Me
                                </label>
                            </td>
                        </tr>
                    </table>

                    <br>
                    <div>
                        <div >
                            <my-button :type="submit">Login</my-button>
                            <span v-if="this.requestLoginFail" class="red-label"> {{this.messageFail}} </span>
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
	        this.post= {email:  "gavrilapaul@hotmail.com", password: null };
	        this.$vanilla.dragDiv(this.$refs.windowRef, this.$refs.headerRef);
        },
        methods: {
	        logOn: function (){
		        // this.$emit(this.EMIT);

		        this.axios.post(this.URI, this.post).then((response) => {
				        if(response.data.succes){
					        this.login = true;
					        this.requestLoginFail = false;
				        }else{
					        this.privateSetLoginFail('Incorrect credentials. Try again.');
				        }

			            this.$emit(this.EMIT);
			        }
		        ).catch( (error) => {
		        	this.privateSetLoginFail('Refresh page and try again.');
			        this.$emit(this.EMIT);
                })
            },
            isLogOn: function () {
                return this.login;
            },
            privateSetLoginFail: function (msg) {
	            this.login = false;
	            this.requestLoginFail = true;
	            this.messageFail = msg;
            }
        },
        data() {
	        return {
		        post:{},
		        login: false,
                requestLoginFail: false,
                messageFail: 'Login fail.'
	        }
        }
    }
</script>

<style scoped></style>
