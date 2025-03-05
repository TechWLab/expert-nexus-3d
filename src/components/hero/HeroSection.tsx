
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { createScene, createNetworkParticles } from "@/utils/three/setupScene";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    stop: () => void;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    
    // Create scene
    const { scene, camera, animate, stop } = createScene({
      container,
      background: "transparent",
      cameraPosition: new THREE.Vector3(0, 0, 10),
    });
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 5, 5);
    scene.add(directionalLight);
    
    // Create network particles with circular dots and more visible colors
    const { particles, connections, animate: animateNetwork } = createNetworkParticles(
      200, // Count
      7,   // Radius
      "#8B5CF6", // Changed to vibrant purple
      "#D3E4FD"  // Changed to soft blue
    );
    
    scene.add(particles);
    connections.forEach(connection => scene.add(connection));
    
    // Start animation
    animate((delta) => {
      animateNetwork(delta);
      
      // Add slight camera movement
      camera.position.x = Math.sin(delta) * 0.3;
      camera.position.y = Math.cos(delta) * 0.3;
      camera.lookAt(0, 0, 0);
    });
    
    // Store scene reference for cleanup
    sceneRef.current = { stop };
    
    // Handle mouse/touch movement for interactive parallax
    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      let x, y;
      
      if ('touches' in e) {
        x = e.touches[0].clientX / window.innerWidth - 0.5;
        y = e.touches[0].clientY / window.innerHeight - 0.5;
      } else {
        x = e.clientX / window.innerWidth - 0.5;
        y = e.clientY / window.innerHeight - 0.5;
      }
      
      particles.rotation.y = x * 0.5;
      particles.rotation.x = y * 0.5;
      
      connections.forEach(connection => {
        connection.rotation.y = x * 0.5;
        connection.rotation.x = y * 0.5;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
      if (sceneRef.current) {
        sceneRef.current.stop();
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* 3D Background */}
      <div ref={containerRef} className="absolute inset-0 z-0" />
      
      {/* Content */}
      <div className="section-container relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
        <span className="badge badge-blue mb-4 animate-fade-in [animation-delay:300ms]">
          Expertise · Network · Intelligence
        </span>
        
        <h1 className="section-title text-center max-w-5xl animate-fade-in [animation-delay:400ms]">
          Connect with <span className="text-gradient">Industry Experts</span> for Informed Decision Making
        </h1>
        
        <p className="section-subtitle text-center animate-fade-in [animation-delay:500ms]">
          Leverage our diverse network of specialists and AI-powered insights 
          to find the perfect expertise for your specific challenges.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in [animation-delay:600ms]">
          <a href="#network" className="btn-primary">
            Explore the Network
          </a>
          <a href="#features" className="btn-outline">
            Discover Features
          </a>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-20 animate-fade-in [animation-delay:700ms]">
          <div className="text-center">
            <p className="text-4xl font-bold text-gradient">5,000+</p>
            <p className="text-sm text-muted-foreground">Verified Experts</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gradient">120+</p>
            <p className="text-sm text-muted-foreground">Industries</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gradient">98%</p>
            <p className="text-sm text-muted-foreground">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-gradient">24/7</p>
            <p className="text-sm text-muted-foreground">Support Access</p>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
