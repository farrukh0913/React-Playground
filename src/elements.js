import carLogo from './car.png';

export function Car() {
    return <h2>Hi, I'm a Developer. Hello World!</h2>;
}

export function Icon() {
    return <img src={carLogo} className="car-logo" alt="logo" />;
}