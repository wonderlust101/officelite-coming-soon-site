// General Animation
export const staggerChildrenVariants = {
    show: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

export const itemVariants = {
    hidden: {
        opacity: 0,
        y      : 75
    },
    show  : {
        opacity   : 1,
        y         : 0,
        transition: {
            duration: 0.75,
            ease    : "easeInOut"
        }
    }
};

export const fromLeftVariants = {
    hidden: { opacity: 0, x: -100 },
    show  : {
        opacity   : 1,
        x         : 0,
        transition: {
            duration: 0.75,
            ease    : "easeInOut"
        }
    }
};

export const fromRightVariants = {
    hidden: { opacity: 0, x: 100 },
    show  : {
        opacity   : 1,
        x         : 0,
        transition: {
            duration: 0.75,
            ease    : "easeInOut"
        }
    }
};


// Page Animation
export const pageVariants = {
    hidden: {
        opacity: 0
    },
    show  : {
        opacity   : 1,
        transition: {
            duration: 0.25,
            ease    : "easeInOut"
        }
    },
    exit  : {
        opacity   : 0,
        transition: {
            duration: 0.25,
            ease    : "easeInOut"
        }
    }
};

// Header Animations
export const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    show  : {
        opacity   : 1,
        y         : 0,
        transition: { duration: 0.75, ease: "easeInOut" }
    }
};

// Card Animation
export const cardVariants = {
    hidden: {
        opacity: 0,
        y      : 300
    },
    show  : {
        opacity   : 1,
        y         : 0,
        transition: {
            duration: 0.75,
            ease    : "easeInOut"
        }
    }
};

// Option Select Animations
export const optionSelectVariants = {
    closed: {
        scale     : 0,
        transition: {
            delay          : 0.30,
            staggerChildren: 0.05
        }
    },
    open  : {
        scale     : 1,
        transition: {
            ease           : "easeInOut",
            duration       : 0.15,
            delayChildren  : 0.20,
            staggerChildren: 0.05
        }
    }
};

export const optionSelectItemVariants = {
    closed: {
        x         : -16,
        opacity   : 0,
        transition: {
            opacity: { duration: 0.25 },
            ease   : "easeInOut"
        }
    },
    open  : {
        x         : 0,
        opacity   : 1,
        transition: {
            opacity: { duration: 0.25 },
            ease   : "easeInOut"
        }
    }
};