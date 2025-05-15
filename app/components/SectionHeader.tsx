import React from 'react'
interface SectionHeader {
    text: string
    header: string
    background?: string
}
const SectionHeader = ({ text, header, background }: SectionHeader) => {
    return (
        <div className={`relative text-white bg-[url(${background})}] bg-cover bg-center bg-no-repeat min-h-[40vh]`}>
            <div className="absolute z-10 inset-0 bg-black/80"></div>
            <div className="absolute inset-0 z-20 flex-col items-center justify-center">
                <h1 className="text-center z-20 text-white mt-14 text-[40px]">{header}</h1>
                <p className="text-center">{text}</p>
            </div>
        </div>
    )
}

export default SectionHeader