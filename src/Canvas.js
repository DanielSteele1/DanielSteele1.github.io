import React, { useEffect, useRef } from 'react';

function CanvasBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Set canvas dimensions
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        // Create particles
        const particlesArray = [];
        const numberOfParticles = isMobile ? 10 : 40;
        const shadowBlur = isMobile ? 20 : 40;


        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 2;  // size of orbs
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
            }

            // Method to draw individual particle
            draw() {
                context.fillStyle = '#c47dff';
                context.strokeStyle = '#c47dff';
                context.lineWidth = 1;
                context.shadowBlur = shadowBlur; // Adjust the blur radius for the glow effect
                context.shadowColor = '#ff00ff'; // Color of the shadow (glow)
                context.shadowOffsetX = 0;
                context.shadowOffsetY = 0;        
                context.beginPath();
                context.lineTo(this.x, this.y);
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.closePath();
                context.fill();
            }

            // Method to update particle position
            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                //if (this.size > 10.0) this.size -= 0.1;
                if (this.x > canvas.width || this.x < 0) {

                    this.speedX = -this.speedX;
                }

                if (this.y > canvas.height || this.y < 0) {

                    this.speedY = -this.speedY;
                }

            }
        }

        // Initialize particles
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }

        function connectParticles() {
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {

                    const dx = particlesArray[a].x - particlesArray[b].x;
                    const dy = particlesArray[a].y - particlesArray[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        context.strokeStyle = 'rgba(196, 125, 255, 0.2)';
                        context.lineWidth = 1;
                        context.beginPath();
                        context.moveTo(particlesArray[a].x, particlesArray[a].y);
                        context.lineTo(particlesArray[b].x, particlesArray[b].y);
                        context.stroke();
                        context.closePath();

                    }

                }
            }
        }

        // Animation loop
        function animate() {
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Draw and update particles
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].draw();
                particlesArray[i].update();
            }

            particlesArray.forEach(particle => {
                particle.update();
                particle.draw();
            });


            connectParticles();
            requestAnimationFrame(animate);
        }

        animate();
    }, []);

    return (
        <div className="canvas-container">
            <canvas ref={canvasRef} />;
        </div>
    );
}

export default CanvasBackground;