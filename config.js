var config = {}

if(process.env.NODE_ENV === 'development'){
    // console.log('开发环境')
	config.env = 'dev'
}else{
    // console.log('生产环境')
	config.env = 'prod'
}

// #ifdef H5
    // alert("只有h5平台才有alert方法")
	config.type = 'H5'
// #endif
console.log(uni.getSystemInfoSync())
switch(uni.getSystemInfoSync().platform){
    case 'android':
       // console.log('运行Android上')
	   config.system = 'android'
       break;
    case 'ios':
       // console.log('运行iOS上')
	   config.system = 'ios'
       break;
    default:
       // console.log('运行在开发者工具上')
	   config.system = 'web'
       break;
}

// if(config.env == 'dev'){
	config.baseurl = ''
	config.ossurl = ''
// }















export default config;
