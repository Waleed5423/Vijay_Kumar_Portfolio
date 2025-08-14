"use client";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Footer = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    return (
        <footer className="relative bg-portfolio-surface border-t border-border/50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-portfolio-accent/5 to-transparent" />
            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">
                            VIJAY KUMAR <br />
                            <span className="bg-gradient-to-r from-primary to-portfolio-accent font-semibold bg-clip-text text-transparent">
                                Quality-Driven
                            </span>
                        </h3>
                        <p className="text-muted-foreground text-sm">
                            Delivering exceptional software quality through rigorous testing methodologies and automation expertise.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/VijayDvaswani"><Button variant="gradient" size="icon">
                                <Github className="h-4 w-4" />
                            </Button></a>
                            <a href="https://www.linkedin.com/in/vijaykumarvaswani/"><Button variant="gradient" size="icon">
                                <Linkedin className="h-4 w-4" />
                            </Button></a>

                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <button
                                    onClick={() => scrollToSection('#about')}
                                    className="hover:text-primary transition-colors"
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('#skills')}
                                    className="hover:text-primary transition-colors"
                                >
                                    Skills
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('#experience')}
                                    className="hover:text-primary transition-colors"
                                >
                                    Experience
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('#projects')}
                                    className="hover:text-primary transition-colors"
                                >
                                    Projects
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('#contact')}
                                    className="hover:text-primary transition-colors"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-primary">Contact Info</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary" />
                                <span>vijay.dvaswani@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <span>+92-3332532999</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>Karachi, Pakistan</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-border/50 mt-12 pt-6 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} VIJAY KUMAR. All rights reserved.</p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;