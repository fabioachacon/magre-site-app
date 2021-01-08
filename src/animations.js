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
        scale: 0.9,
        transition: {
            duration: 0.75,
            ease: 'easeOut'
        }   
     },
    show: {
        scale: 1,
        opacity: 1, 
        transition: { 
            ease: 'easeOut', 
            duration: 0.7,
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
            duration: 0.75,
            ease: 'easeOut',
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
            duration: 0.75,
        }
    },
    exit: {
        opacity: 0,
        transition: { 
            ease: 'easeOut', 
            duration: .3, 
        }
    }
}

export const TextAnim = {
    hidden: {
        y: 40,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1, 
        transition: {
            duration: 0.75,
            ease: 'easeIn'
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

export const TableAnim = {
    hidden: {
        x: -190,
        opacity: 0,
        transition: {
            duration: 0.75
        }
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.75,
            ease: "easeOut"
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
            staggerChildren: 0.35
        }
    }
}

export const PopUp = {
    hidden: {
        opacity: 0,
        scale: 0.5,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: 'easeOut',
        }
    }
}

