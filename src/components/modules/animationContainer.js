import React, { Component }  from 'react';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function AnimationContainer(props) {
    const canvasContainer = useRef(null);

    useEffect(() => {
        var SCREEN_WIDTH = window.innerWidth;
        var SCREEN_HEIGHT = window.innerHeight;



        var camera, scene,  renderer = null

        var mouseX = 0, mouseY = 0;

        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;

		camera = new THREE.PerspectiveCamera( 35, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 5000 );
        camera.position.z = 1500;
        camera.position.y =210

		scene = new THREE.Scene();
		scene.background = new THREE.Color( 0x000000 );
		scene.fog = new THREE.Fog( 0x000000, 1500, 4000 );

		// GROUND

		var imageCanvas = document.createElement( "canvas" ),
			context = imageCanvas.getContext( "2d" );

		imageCanvas.width = imageCanvas.height = 128;

		context.fillStyle = "#444";
		context.fillRect( 0, 0, 128, 128 );

		context.fillStyle = "#fff";
		context.fillRect( 0, 0, 64, 64 );
		context.fillRect( 64, 64, 64, 64 );

		var textureCanvas = new THREE.CanvasTexture( imageCanvas );
		textureCanvas.repeat.set( 1000, 1000 );
		textureCanvas.wrapS = THREE.RepeatWrapping;
		textureCanvas.wrapT = THREE.RepeatWrapping;

		var textureCanvas2 = textureCanvas.clone();
		textureCanvas2.magFilter = THREE.NearestFilter;
		textureCanvas2.minFilter = THREE.NearestFilter;

		var	materialCanvas = new THREE.MeshBasicMaterial( { map: textureCanvas } );
		var materialCanvas2 = new THREE.MeshBasicMaterial( { color: 0xffccaa, map: textureCanvas2 } );

		var geometry = new THREE.PlaneBufferGeometry( 100, 100 );

		var meshCanvas = new THREE.Mesh( geometry, materialCanvas );
		meshCanvas.rotation.x = - Math.PI / 2;
		meshCanvas.scale.set( 1000, 1000, 1000 );

		var meshCanvas2 = new THREE.Mesh( geometry, materialCanvas2 );
		meshCanvas2.rotation.x = - Math.PI / 2;
		meshCanvas2.scale.set( 1000, 1000, 1000 );
		scene.add( meshCanvas );

		renderer = new THREE.WebGLRenderer( { antialias: true } );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT - 10 );
		renderer.autoClear = false;

		
        canvasContainer.current.appendChild( renderer.domElement );

        document.addEventListener( 'mousemove', onDocumentMouseMove, false );

        function onDocumentMouseMove( event ) {

                mouseX = ( event.clientX - windowHalfX ) * 0.05;
                mouseY = ( event.clientY - windowHalfY ) * 0.05;

            }




	function animate() {

		requestAnimationFrame( animate );

		render();

	}

	function render() {
		camera.lookAt( scene.position );

		camera.position.x += ( mouseX - camera.position.x ) * .09;
		camera.position.y += ( - ( mouseY - 200 ) - camera.position.y ) * .09;
        renderer.clear();

		
		
		renderer.render( scene, camera );

	}
    window.addEventListener( 'resize', onWindowResize, false );

    function onWindowResize(){
    
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    
        renderer.setSize( window.innerWidth, window.innerHeight );
    
    }
	animate();
    scene.add( meshCanvas );      
            
        }, [])
        return (
            <div className="Three_container" ref={canvasContainer}></div>
    )}

