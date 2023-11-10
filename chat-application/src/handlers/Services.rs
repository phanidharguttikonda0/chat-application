

pub mod Services {
    use sqlx::{PgConnection, PgPool, Pool, Postgres, query, Row};
    use sqlx::postgres::PgPoolOptions;


    use serde::Deserialize;
    use serde_json::json;


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

    struct database {
        connection: Pool<Postgres>
    }




    impl database {
        pub async fn new() -> database {
            let database_url = "postgres://postgres:Phani@9090K@localhost/chatapp"; // Replace with your database URL
            database {
                connection : PgPoolOptions::new()
                    .max_connections(5) // Set your desired maximum number of connections
                    .connect(&database_url)
                    .await.unwrap()
            }
        }
    }

    pub async fn sign_in_(username: String, password: String) -> bool{
        // create connection
        let con = database::new().await ;

        let row =
            sqlx::query("SELECT * FROM user_credentials WHERE username = $1")
            .bind(&username)
            .fetch_optional(&con.connection) // this function is used to fetch single row
            .await.expect("") ;

        con.connection.close().await ;

        match row {
            Some(row) => {
                // Map the row to your struct
                let password_: String = row.get("password") ;
                println!("The password_ was {}", password_) ;
                if password == password_ {
                    return true ;
                }
                false
            }
            None => false,
        }

        //return true if the password and the username are correct else false

    }


    pub async fn sign_up_(email: String, mobile_number: String, username: String, password: String) -> bool {
        // create connection
        let con = database::new().await ;

        //check whether the any of the details registered or not


        let check_email = sqlx::query("select * from user_credentials where email = $1")
            .bind(&email)
            .fetch_optional(&con.connection)
            .await.expect("") ;


        let check_username = sqlx::query("select * from user_credentials where username = $1")
            .bind(&username)
            .fetch_optional(&con.connection)
            .await.expect("") ;


        let check_mobile_number = sqlx::query("select * from user_credentials where mobilenumber = $1")
            .bind(&mobile_number)
            .fetch_optional(&con.connection)
            .await.expect("") ;

        // if not insert in to the table

        match check_email {
            Some(email) => {
                return false ;
            },
            None => {
                match check_mobile_number {
                    Some(mobile) => return false ,
                    None => {
                        match check_username {
                            Some(username) => return false,
                            None => {
                                // now we need to push the values to the data base and close the connection
                                let res  = query("INSERT INTO user_credentials (email, mobilenumber, username, password) VALUES ($1, $2, $3, $4)")
                                    .bind(&email)
                                    .bind(&mobile_number)
                                    .bind(&username)
                                    .bind(&password)
                                    .execute(&con.connection)
                                    .await.unwrap(); ;

                                con.connection.close().await;
                                true
                            }
                        }
                    }
                }
            }
        }

    }


}