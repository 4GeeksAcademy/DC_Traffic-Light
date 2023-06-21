import React, {useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {


	// ESTADOS

	const [rojo, setRojo] = useState("")
	const [amarillo, setAmarillo] = useState("")
	const [verde, setVerde] = useState("")
	const [morado, setMorado] = useState("")
	const [esVisible, setEsVisible] = useState(false);

		// ROJO

		function cambiarRojo(){
			setRojo("selected")
			verde === "selected" ? setVerde (" ") : " ";
			rojo === "selected" ? setRojo (" ") : " ";
			amarillo === "selected" ? setAmarillo (" ") : " ";
			morado === "selected" ? setMorado (" ") : " ";
			
		};

		// AMARILLO

		function cambiarAmarillo(){
			setAmarillo("selected")
			verde === "selected" ? setVerde (" ") : " ";
			rojo === "selected" ? setRojo (" ") : " ";
			amarillo === "selected" ? setAmarillo (" ") : " ";
			morado === "selected" ? setMorado (" ") : " ";
			
		};

		// VERDE


		function cambiarVerde(){
			setVerde("selected")

			verde === "selected" ? setVerde (" ") : " ";
			rojo === "selected" ? setRojo (" ") : " ";
			amarillo === "selected" ? setAmarillo (" ") : " ";
			morado === "selected" ? setMorado (" ") : " ";
			
		};

		// RANDOM

		function colorRandom  () {

			let colores = ["Rojo","Amarillo","Verde","Morado"]

			let resultado = colores[Math.floor(Math.random() * colores.length)];

			resultado === "Rojo" ? cambiarRojo() : " ";
			resultado === "Amarillo" ? cambiarAmarillo() : " ";
			resultado === "Verde" ? cambiarVerde() : " ";
			resultado === "Morado" ? cambiarMorado() : " ";

			}

		// MORADO

		function cambiarMorado(){
			setMorado("selected")
			verde === "selected" ? setVerde (" ") : " ";
			rojo === "selected" ? setRojo (" ") : " ";
			amarillo === "selected" ? setAmarillo (" ") : " ";
			morado === "selected" ? setMorado (" ") : " ";
		}


			// NEW COLOR
			function newColor () {
				setEsVisible(true);
				esVisible === true ? setEsVisible(false) : setEsVisible(true);

			  };


	return(
	
		<>
			<div className="top" ></div>
			
			
			<div className="d-flex">
				
				<div className="">
				<button type="button" onClick={newColor} id="new " className="btn btn-info justify-content-start">new color</button>
				<button type="button" onClick={colorRandom} id="random" className=" btn btn-info justify-content-start">Random</button>
				</div>

				<div className="fondo bg-dark d-flex flex-column  p-3 ">
					
					<button type="button" onClick={cambiarRojo} className={"btn btn-danger rounded-circle  mb-2 " + rojo}></button>
					
					
					<button type="button" onClick={cambiarAmarillo} className={"btn btn-warning rounded-circle mb-2 " + amarillo}></button>
					
					
					{esVisible && <button type="button" onClick={cambiarMorado} className={"morado btn rounded-circle mb-2  " + morado}></button>}


					<button type="button" onClick={cambiarVerde} className={"btn btn-success rounded-circle mb-2  " + verde}></button>
					

				</div>
			</div>
		</>
	)
		
		
}


export default Home;
