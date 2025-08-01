import '../styles/displayPics.scss';

function PlusIcon({ borderColor = 'gray', size = 60 }) {
    return(
        <div className="dp-wrapper"
            style={{
                borderColor: borderColor,
                width: size,
                height: size,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0V8H18V10H10V18H8V10H0V8H8V0H10Z" fill="#262626"/>
            </svg>
        </div>
    )
}

export default PlusIcon
