import sequelize from "./api/DB/db";

export default async function Home() {

 try {
  await sequelize.sync({force:true})
  console.log("la coneccion se ha establecido")
 } catch (error) {
  console.error(error)
 }


  return (
    <div>
      <h2>PROYECTO</h2>
    </div>
  );
}
