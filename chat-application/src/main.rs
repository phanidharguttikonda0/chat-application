mod handlers;


use actix_web::{App, HttpRequest, HttpResponse, HttpServer, Responder, web};
use actix_cors::Cors ;
use handlers::handlers::sign_up;
use handlers::handlers::sign_in;
use handlers::handlers::get_chats_request;


#[actix_web::main]
async fn main() -> std::io::Result<()>{
    HttpServer::new(||{
        App::new()
            .wrap(Cors::default().allow_any_header().allow_any_origin().allow_any_method()
                .max_age(3600))
            .route("/", web::post().to(get_chats_request))
            .route("/Sign-Up", web::post().to(sign_up))
            .route("/Sign-In", web::post().to(sign_in))


    })
        .bind(("127.0.0.1", 8080)).unwrap().run().await
}
