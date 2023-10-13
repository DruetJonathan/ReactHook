export function ProgressBar({ valueScroll }) {
    const windowHeight = window.innerHeight;
    const scrollPercentage = (valueScroll / (document.body.scrollHeight - windowHeight)) * 100;
    const style = {
        width: `${scrollPercentage}%`,
    };

    return <div style={style} className="progress"></div>;
}
