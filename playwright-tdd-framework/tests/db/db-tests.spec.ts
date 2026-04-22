   import { DbCommons } from "../../common/db/db-common";   
   import {test } from '@playwright/test';

   test.describe('Dbcommons', ()=>{

    let db :DbCommons;

    test.beforeAll(()=>{
        db=new DbCommons();
    })


    test('validate the database data', async()=>{


const qurey=`SELECT FILM.TITLE AS MOVIE_NAME , CATEGORY.NAME AS MOVIE_CATEGORY , LANGUAGE.NAME AS MOVIE_LANGUAGE FROM CATEGORY
 JOIN
 FILM_CATEGORY
 ON
 CATEGORY.CATEGORY_ID= FILM_CATEGORY.CATEGORY_ID
 JOIN
 FILM 
 ON
FILM_CATEGORY.FILM_ID=FILM.FILM_ID 
 JOIN
 LANGUAGE
 ON
 FILM.LANGUAGE_ID=LANGUAGE.LANGUAGE_ID
 WHERE
 CATEGORY.NAME='Horror'
 AND
 LANGUAGE.NAME ='English' 
 AND
 FILM.TITLE LIKE '%Devil' 
 ORDER BY FILM.TITLE ASC
 LIMIT 10`

const data = db.getData(qurey);

console.log(data);
    });


    
   }); 