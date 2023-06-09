function Button({ onClick, children }) {
    return (
        <button onClick={e => {
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    );
}

function PlayButton({ movieName }) {
    function handlePlayClick() {
        alert('Playing ${movieName}!');
    }

    return (
        <Button onClick={handlePlayClick}>
            Play"{movieName}"
        </Button>
    );
}

function UploadButton() {
    return (
        <Button onClick={() => alert('Uploading!')}>
            Upload Image
        </Button>
    );
}

function AlertButton({ message, children }) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

export default function App() {
    return (
        <div className="card-containerToolbar">
            <Toolbar onSumit={e => {
                e.preventDefaut();
                alert('Submitting!');
            }}
                onPlayMovie={() => alert('Playing!')}
                onUploadImage={() => alert('Uploading!')}
            />
        </div>
    );
}

//  export default 

function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
        <div className="toolbarCard">
            <div className="Toolbar" onClick={() => {
                alert('You clicked on the toolbar!');
            }}>
                {/* <AlertButton message="Playing!">
                Play Movie
            </AlertButton>

            <AlertButton message="Uploading!">
                Upload Image
            </AlertButton>

            <PlayButton movieName="Kiki´s Delivery Service"/>
            <UploadButton/> */}

                {/* <Button onClick={onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick={onUploadImage}>
                Upload Image
            </Button> */}

                <button onClick={() => alert('Playing!')}>
                    Play Movie
                </button>

                <button onClick={() => alert('Uploading!')}>
                    Upload Image
                </button>
            </div>
        </div>
    );
}

