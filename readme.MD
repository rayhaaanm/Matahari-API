# MATAHARI API (Unofficial)🎉️ 

Matahari API is a web scrapper for the www.matahari.com website to get specific product data. This scrapper is developed using the express.js framework and using axios and cheerio modules.

## API LINK 🔗

###### localhost:3000

## API ENDPOINT


|        Endpoint        | Method | Input |           Description           |
| :----------------------: | :------: | :-----: | :-------------------------------: |
| /data-scrapper/{query} |  GET  | query | Get product data based on query |

### API RESPONSE

```
}
"status": true,
"message": "Data retrieved sucessfully",
"result":[
   {
   "link":,
   "image":,
   "title":,
   "price":,
   },
        ]
}
```

## How to run this API on your local machine 💻

If you want to run this API Server on your local machine, you need to do this steps:

- First, clone this repository. `git clone https://github.com/rayhaaanm/Matahari-API.git`
- Second, open terminal and go to this project's root directory.
- Third, type `npm ci` in your terminal and hit enter button.
- fourth, type `npm run start` in your terminal and hit enter button.
- Finally, the server will run on your http://localhost:3000

## Notes

For the query parameter you need to change space into "+"

###### Example


|    Product    |            Query            |
| :--------------: | :----------------------------: |
| White Sneakers | /data-scrapper/white+sneaker |

If you want get more than 5 data you change the splice parameter in modules/scrapper.js

```
  return result.slice(0, 5);
```
