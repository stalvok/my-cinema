<template>
  <div class="app-icon duration-300" :style="style">
    <svg v-if="name === 'arrow'" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 7.5L10 12.5L15 7.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'home'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.8499 15.8257V13.1822H8.8776V21.9383H2.5V10.9383L12 2.93832L21.5 10.9383V21.9383H14.8499" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'search-icon'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_177_141)">
        <path d="M16.298 16.2981C13.2977 19.2985 8.43306 19.2985 5.43266 16.2981C2.43227 13.2977 2.43227 8.43308 5.43266 5.43269C8.43306 2.4323 13.2977 2.4323 16.298 5.43269C19.2984 8.43308 19.2984 13.2977 16.298 16.2981ZM16.298 16.2981L19.6935 19.6935" stroke="#9395A4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_177_141">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
    <svg v-if="name === 'input-menu'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.2546 6.21497H3.75464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.2546 12.215L9.25464 12.215" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.2546 17.785L13.2546 17.785" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'vector'" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.00326 1.84181L1.15747 9.00001M1.15747 9.00001L8.00326 16.1582M1.15747 9.00001H18.8424" stroke="#191C32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'menu'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="2" fill="#191C32"/>
      <circle cx="4.4751" cy="12" r="2" fill="#191C32"/>
      <circle cx="19.5249" cy="12" r="2" fill="#191C32"/>
    </svg>
    <svg v-if="name === 'lock'" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="11.3179" y="15.0986" width="9.56336" height="6.58655" rx="1" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16.1477 17.8763V18.886" stroke="#9F9DF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M13.7678 14.69V12.3149C13.7678 11.2103 14.6633 10.3149 15.7678 10.3149H17.2006C18.3051 10.3149 19.2006 11.2103 19.2006 12.3149V12.4303" stroke="#9F9DF3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'mail'"  viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 12H22V21H10V12ZM10 12L16 17L19 15" stroke="#5FC88F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <svg v-if="name === 'facebook'" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48">
      <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"/><stop offset="1" stop-color="#007ad9"/></linearGradient>
      <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"/>
      <path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"/>
    </svg>
    <svg v-if="name === 'google'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <path fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
      <path fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
      <path fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
      <path fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
    </svg>
    <svg v-if="name === 'apple'" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
      <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"/>
    </svg>
    <svg v-if="name === 'bell'"  id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 207.948 207.948" style="enable-background:new 0 0 207.948 207.948;" xml:space="preserve">
      <g>
	<g>
		<g id="_x3C_Compound_Path_x3E__1_">
			<g>
				<g>
					<path style="fill:white;" d="M104.591,207.474c-14.963,0-27.911-13.643-32.006-33.409H4.286c-1.714,0-3.271-1.024-3.94-2.605
						c-0.676-1.578-0.344-3.403,0.845-4.653c4.406-4.606,8.6-8.181,12.304-11.338c9.101-7.759,14.598-12.444,14.598-24.54V90.918
						c0.179-34.429,23.098-65.056,54.91-73.978c1.542-6.993,7.136-16.466,20.965-16.466c13.686,0,19.347,9.777,20.936,16.924
						c31.988,8.954,55.018,39.392,55.182,73.506v41.343c0,11.724,4.864,15.697,13.675,22.894c3.887,3.171,8.285,6.764,12.995,11.671
						c1.185,1.242,1.525,3.071,0.845,4.653c-0.673,1.578-2.226,2.605-3.94,2.605h-67.071
						C132.495,193.832,119.554,207.474,104.591,207.474z M81.776,175.608c3.837,13.757,12.938,23.291,22.815,23.291
						c9.874,0,18.968-9.534,22.808-23.291H81.776z M15.001,165.487h177.826c-1.553-1.321-3.056-2.548-4.481-3.704
						c-9.398-7.677-16.824-13.739-16.824-29.536V90.918c-0.15-31.168-21.767-58.901-51.407-65.908
						c-1.829-0.433-3.16-2.008-3.293-3.883c-0.086-1.21-1.288-12.082-12.848-12.082c-11.9,0-12.794,10.368-12.848,11.556
						c-0.1,1.904-1.446,3.511-3.3,3.944C58.352,31.502,36.84,59.428,36.679,90.943v39.99c0,16.055-8.167,23.008-17.619,31.068
						C17.761,163.1,16.401,164.26,15.001,165.487z"/>
				</g>
			</g>
		</g>
    <g>
			<g>
				<path style="fill:white;" d="M126.823,26.746c-0.412,0-0.834-0.061-1.249-0.19c-22.74-6.921-41.497-1.117-41.686-1.056
					c-2.269,0.716-4.66-0.53-5.383-2.777c-0.723-2.251,0.512-4.66,2.759-5.383c0.862-0.279,21.376-6.721,46.804,1.016
					c2.265,0.684,3.539,3.081,2.856,5.347C130.359,25.554,128.655,26.746,126.823,26.746z"/>
			</g>
		</g>
	</g>
</g>
    </svg>
  </div>
</template>

<style>
.app-icon svg {
  width: 100%;
  height: 100%;
  & path {
    stroke:currentColor;
  }
}
</style>

<script>

export default {
  name: "AppIcon",
  components: {},
  data() {
    return {
    }
  },
  props:{
    name: {
      String
    },
    width: {
      Number
    },
    height: {
      Number
    },
  },
  computed: {
    style() {
      return {
        width:this.width + 'px',
        height:this.height + 'px'
      }
    }
  }
}
</script>

<style scoped>

</style>