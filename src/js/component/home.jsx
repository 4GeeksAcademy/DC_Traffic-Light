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
			if (rojo === "selected"){
				setRojo (" ")	
			}
			if (amarillo === "selected"){
				setAmarillo (" ")
			}
			if (verde === "selected"){
				setVerde (" ")
			}
			if (morado === "selected"){
				setMorado (" ")
			}
		};

		// AMARILLO

		function cambiarAmarillo(){
			setAmarillo("selected")
			if (amarillo === "selected"){
				setAmarillo (" ")
			}
			if (verde === "selected"){
				setVerde (" ")
			}
			if (rojo === "selected"){
				setRojo (" ")	
			}
			if (morado === "selected"){
				setMorado (" ")
			}
		};

		// VERDE


		function cambiarVerde(){
			setVerde("selected")
			if (verde === "selected"){
				setVerde (" ")
			}
			if (rojo === "selected"){
				setRojo (" ")	
			}
			if (amarillo === "selected"){
				setAmarillo (" ")
			}
			if (morado === "selected"){
				setMorado (" ")
			}
		};

		// RANDOM

		function colorRandom  () {

			let colores = ["Rojo","Amarillo","Verde"]

			let resultado = colores[Math.floor(Math.random() * colores.length)];

			resultado === "Rojo" ? cambiarRojo() : " ";
			resultado === "Amarillo" ? cambiarAmarillo() : " ";
			resultado === "Verde" ? cambiarVerde() : " ";

			}

		// MORADO

		function cambiarMorado(){
			setMorado("selected")
			if (morado === "selected"){
				setMorado (" ")
			}
			if (rojo === "selected"){
				setRojo (" ")	
			}
			if (amarillo === "selected"){
				setAmarillo (" ")
			}
			if (verde === "selected"){
				setVerde (" ")
			}
		}


			// NEW COLOR
			function newColor () {
				setEsVisible(true);
				esVisible === true ? setEsVisible(false) : setEsVisible(true);

			  };

				




	return(
	
		<>
			<div className="top" ></div>
			
			<div className="fondo bg-dark d-flex flex-column  p-3 ">
				
				<button type="button" onClick={cambiarRojo} className={"btn btn-danger rounded-circle  mb-2 " + rojo}></button>
				
				
				<button type="button" onClick={cambiarAmarillo} className={"btn btn-warning rounded-circle mb-2 " + amarillo}></button>
				
				
				{esVisible && <button type="button" onClick={cambiarMorado} className={"morado btn rounded-circle mb-2  " + morado}></button>}


				<button type="button" onClick={cambiarVerde} className={"btn btn-success rounded-circle mb-2  " + verde}></button>
				

			</div>
			<button type="button" onClick={colorRandom} className="random btn btn-info ">Random</button>
			<button type="button" onClick={newColor} className="random btn btn-info ">new color</button>
		</>
	)
		
		
}


export default Home;
