import React, {useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [rojo, setRojo] = useState("")
	const [amarillo, setAmarillo] = useState("")
	const [verde, setVerde] = useState("")

	function cambiarRojo(){
		setRojo("selected")
		if (rojo === "selected"){
			setRojo (" ")
		}
	}

	function cambiarAmarillo(){
		setAmarillo("selected")
		if (amarillo === "selected"){
			setAmarillo (" ")
		}
	}


	function cambiarVerde(){
		setVerde("selected")
		if (verde === "selected"){
			setVerde (" ")
		}
	}

	return(
		<div className="fondo bg-dark d-flex flex-column mt-5 p-3">
			
			<button type="button" onClick={cambiarRojo} className={"btn btn-danger rounded-circle  mb-2 " + rojo}></button>
			
			
			<button type="button" onClick={cambiarAmarillo} className={"btn btn-warning rounded-circle mb-2 " + amarillo}></button>
			
			
			<button type="button" onClick={cambiarVerde} className={"btn btn-success rounded-circle mb-2  " + verde}></button>
			

		</div>
	)
}


export default Home;
