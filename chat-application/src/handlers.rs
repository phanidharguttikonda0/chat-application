mod Services;
use Services::Services::sign_in_;

pub mod handlers {
    use actix_web::{HttpRequest, HttpResponse, Responder};
    use actix_web::web::Json;
    use serde::Deserialize;
    use serde_json::json;
    use crate::handlers::Services::Services::{sign_in_, sign_up_};


    #[derive(Deserialize)]
    pub struct SignIn {
        username : String,
        password : String,
    }

    #[derive(Deserialize)]
    pub struct SignUp{
        email : String,
        mobile_number : String,
        username : String,
        password : String,
    }

    pub async fn sign_up( data: Json<SignUp> ,req: HttpRequest) -> impl Responder {

        // connecting to data-base and storing the data-base
        let val = sign_up_(String::from(&data.email)
                           , String::from(&data.mobile_number), String::from(&data.username),
                           String::from(&data.password)
        ).await ;
        HttpResponse::Ok().body(val.to_string())

    }

    pub async fn sign_in( data: Json<SignIn>, req: HttpRequest) -> impl Responder {

        // connecting to the data-base and checking whether the data is there are not
        let val = sign_in_( String::from(&data.username),
                           String::from(&data.password)
        ).await ;
        HttpResponse::Ok().body(val.to_string())

    }
}