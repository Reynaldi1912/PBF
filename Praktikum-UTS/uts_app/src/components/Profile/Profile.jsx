import { Flex , Box , Image, Center , SimpleGrid ,Text ,Stack, HStack, Circle} from '@chakra-ui/react'
import React from 'react'
import ProfileProps from './ProfileProps'


function Profile(){
    return(
        <ProfileProps 
            bidang ="WEB DEVELOPER"
            nama="Reynaldi Ramadhani Eka Purnomo"
            kuliah="POLITEKNIK NEGERI MALANG"
            biodata="Halo Semua Nama Saya Reynaldi Ramadhani Eka Purnomo Mahasiswa Semester 6 di Politeknik Nergeri Malang
                    , Saya adalah seorang Web Developer . saya menguasai dasar pemograman web seperti html , css , javascript . saya 
                    juga bisa menggunakan beberapa framework diantaranya Laravel dan juga Front End nya React JS . Website ini berjalan
                    di React Js."
            quotes="'' In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them. ''- Andrew Hunt" 
            skill = "WEB BASIC (HTML , CSS , JAVASCRIPT) , LARAVEL , REACTJS , CMS(Wordpress)" 
        />
    )
}

export default Profile