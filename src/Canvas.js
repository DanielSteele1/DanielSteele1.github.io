import React, { useEffect, useRef } from 'react';

function CanvasBackground() {
    const canvasRef = useRef(null);
    const particlesArray = useRef([]);


    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        // Create particles
        const numberOfParticles = isMobile ? 10 : 30;
        const shadowBlur = isMobile ? 10 : 20;

        function setCanvasDimensions() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }

        function createParticles() {
            particlesArray.current = [];
            for (let i = 0; i < numberOfParticles; i++) {
                particlesArray.current.push(new Particle());
            }
        }


        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.2 + 1.2;  // size of orbs
                this.speedX = (Math.random() * 1 - 0.5) * 0.4;
                this.speedY = (Math.random() * 1 - 0.5) * 0.3;
            }

            // Method to draw individual particle
            draw() {
                context.fillStyle = '#FF4C98';
                context.strokeStyle = '#FF4C98';
                context.shadowBlur = shadowBlur; // Adjust the blur radius for the glow effect
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
            particlesArray.current.push(new Particle());
        }

        function connectParticles() {
            for (let a = 0; a < particlesArray.current.length; a++) {
                for (let b = a; b < particlesArray.current.length; b++) {

                    const dx = particlesArray.current[a].x - particlesArray.current[b].x;
                    const dy = particlesArray.current[a].y - particlesArray.current[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        context.strokeStyle = 'rgba(255, 76, 152, 0.4)';
                        context.lineWidth = 1;
                        context.beginPath();
                        context.moveTo(particlesArray.current[a].x, particlesArray.current[a].y);
                        context.lineTo(particlesArray.current[b].x, particlesArray.current[b].y);
                        context.stroke();
                        context.closePath();

                    }

                }
            }
        }

        // Animation loop
        function animate() {
            context.clearRect(0, 0, canvas.width, canvas.height);

            particlesArray.current.forEach(particle => {
                particle.update();
                particle.draw();
            });

            connectParticles();
            requestAnimationFrame(animate);
        }

            function handleResize() {
                setCanvasDimensions();
                createParticles();
            }

            setCanvasDimensions();
            createParticles();
            animate();

            window.addEventListener('resize', handleResize);

            return () => {

                window.removeEventListener('resize', handleResize);
            };
    }, []);

    return (
        <div className="canvas-container">
            <canvas ref={canvasRef} />;
        </div>
    );
}

export default CanvasBackground;