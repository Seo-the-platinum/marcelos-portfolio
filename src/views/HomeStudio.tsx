const HomeStudio = () => {
    return (
        <div className="flex flex-col gap-8 p-8" id='work-studio'>
            <h3 className="font-semibold text-4xl">Home Studio</h3>
            <div className='flex flex-col gap-8 md:grid grid-cols-3'>
                <div className="flex flex-col gap-4">
                    <h4 className="font-semibold text-2xl">Equipment & Space</h4>
                    <div className="flex flex-col gap-2">
                        <p>Sennheiser MKH 416 Shotgun mic</p>
                        <p>Apollo Solo Audio Interface</p>
                        <p>Broadcast Quality Studio</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-semibold text-2xl">DAW</h4>
                    <div className="flex flex-col gap-2">
                        <p>Audacity</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-semibold text-2xl">Connection Capabilities</h4>
                    <div className="flex flex-col gap-2">
                        <p>Source Connect</p>
                        <p>Zoom</p>
                        <p>Google</p>
                        <p>Microsoft Teams</p>
                        <p>Skype</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeStudio