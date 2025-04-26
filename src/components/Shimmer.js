// Add inline styles for the shimmer effect
const shimmerStyles = {
    container: {
        display: 'flex',
        gap: '10px',
        padding: '20px',
        flexWrap: 'wrap',
    },
    card: {
        width: '275px',
        height: '275px',
        background: 'linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite',
        borderRadius: '8px',
    },
};

// Add keyframes for shimmer animation
const shimmerAnimation = `
@keyframes shimmer {
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 200% 0;
    }
}
`;

// Inject the keyframes into a style tag
const styleTag = document.createElement('style');
styleTag.innerHTML = shimmerAnimation;
document.head.appendChild(styleTag);

const Shimmer = () => {
    return (
        <div style={shimmerStyles.container}>
            <div style={shimmerStyles.card}></div>
            <div style={shimmerStyles.card}></div>
            <div style={shimmerStyles.card}></div>
            <div style={shimmerStyles.card}></div>
            <div style={shimmerStyles.card}></div>
            <div style={shimmerStyles.card}></div>
            <div style={shimmerStyles.card}></div>
            <div style={shimmerStyles.card}></div>
            <div style={shimmerStyles.card}></div>
            <div style={shimmerStyles.card}></div>
            <div style={shimmerStyles.card}></div>
            <div style={shimmerStyles.card}></div>
            <div style={shimmerStyles.card}></div>
            <div style={shimmerStyles.card}></div>
            <div style={shimmerStyles.card}></div>
            <div style={shimmerStyles.card}></div>
        </div>
    );
};

export default Shimmer;