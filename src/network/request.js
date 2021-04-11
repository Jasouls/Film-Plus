import axios from 'axios'

//首页
//nowplaying
export function request1(config){
    const intance = axios.create({
        baseURL:'https://m.maizuo.com',
        headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16151811551288777951608833","bc":"310100"}',
            'X-Host': 'mall.film-ticket.film.list'
        }
    })
    return intance(config)
}
//comingsoon
export function request2(config){
    const intance = axios.create({
        baseURL:'https://m.maizuo.com',
        headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16151811551288777951608833"}',
            'X-Host': 'mall.film-ticket.film.list'
        }
    })
    return intance(config)
}

//详情
//detail
export function request3(config){
    const intance = axios.create({
        baseURL:'https://m.maizuo.com',
        headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16151811551288777951608833","bc":"440300"}',
            'X-Host': 'mall.film-ticket.film.info'
        }
    })
    return intance(config)
}


//影院
//cinema
export function request4(config){
    const intance = axios.create({
        baseURL:'https://m.maizuo.com',
        headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16151811551288777951608833","bc":"440300"}',
            'X-Host': 'mall.film-ticket.cinema.list'
        }
    })
    return intance(config)
}

//cinemapage
export function request41(config){
    const intance = axios.create({
        baseURL:'https://m.maizuo.com',
        headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16151811551288777951608833","bc":"110100"}',
            'X-Host': 'mall.film-ticket.cinema.info'
        }
    })
    return intance(config)
}

export function request42(config){
    const intance = axios.create({
        baseURL:'https://m.maizuo.com',
        headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16151811551288777951608833","bc":"110100"}',
            'X-Host': 'mall.film-ticket.film.cinema-show-film'
        }
    })
    return intance(config)
}

//快讯
//news
export function request5(config){
    const intance = axios.create()
    return intance(config)
}

//城市
//city
export function request6(config){
    const intance = axios.create({
        baseURL:'https://m.maizuo.com',
        headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16151811551288777951608833","bc":"440300"}',
            'X-Host': 'mall.film-ticket.city.list'
        }
    })
    return intance(config)
}