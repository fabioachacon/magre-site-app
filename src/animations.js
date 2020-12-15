export const iconAnim = {
    hidden: {
        opacity: 0,
        y: 80,
        transition: {
            duration: 0.75
        }
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: 'easeOut'
        }
    },
}

export const FadeScale = {
    hidden: { 
        opacity: 0,
        scale: 1.1,
        transition: {
            duration: 0.75
        }   
     },
    show: {
        scale: 1,
        opacity: 1, 
        transition: { 
            ease: 'easeOut', 
            duration: 0.75,
        
        }
    }
}

export const FadeScaleCaps = {
    hidden: { 
        opacity: 0,
        scale: 1.1,
        transition: {
            duration: 0.55,
            delay: .2
            
        }   
     },
    show: {
        scale: 1,
        opacity: 1, 
        transition: { 
            ease: 'easeOut', 
            duration: 0.75,
    
        }
    }
}

export const Fade = {
    hidden: { 
        opacity: 0,
        transition: {
            duration: 0.35
        }   
     },
    show: {
        opacity: 1, 
        transition: { 
            ease: 'easeOut', 
            duration: 0.75,
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.75
        }   
    }
}

export const TextFade = {
    hidden: { 
        opacity: 0,
        transition: {
            duration: 0.35
        }   
     },
    show: {
        opacity: 1, 
        transition: { 
            ease: 'easeOut', 
            duration: 0.35
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.35
        }   
    }
}

export const FadePoint = {
    hidden: { 
        scale: 0.9,
        transition: {
            duration: 0.56
        }   
     },
    show: {
        scale: 1.1,
        transition: {
            ease: 'easeOut', 
            duration: 0.7,
        
        }
    },
    exit: {
        opacity: 0,
        transition: { 
            ease: 'easeOut', 
            duration: 0.3, 
        }
    }
}

export const TextAnim = {
    hidden: {
        y: -100,
        opacity: 0
    },
    show: {
        y: 0, 
        opacity: 1,
        transiton: {
            duration: 0.75
        }
    }
}

export const buttonAnim = {
    visible: {
        opacity: 1
    },
    hover: {
        x: [0, 15, -15, 15, -15, 0],
        transition: {
            delay: 0.1,
            duration: 0.55,
            ease: 'easeOut',

        }
    }
}

export const StaggerAnim = {
    hidden: {
        opacity: 1
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}

