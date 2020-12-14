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
        scale: 0.8,
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
            delay: 0.3
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
            duration: 0.75
        }   
     },
    show: {
        opacity: 1, 
        transition: { 
            ease: 'easeOut', 
            duration: 0.7
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.75
        }   
    }
}

export const FadePoint = {
    hidden: { 
        opacity: 0,
        transition: {
            duration: 0.75
        }   
     },
    show: {
        opacity: 1, 
        transition: { 
            ease: 'easeOut', 
            duration: 0.75,
            delay: 1
        
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.75
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

