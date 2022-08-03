import { Card } from '@material-tailwind/react';

const colors = {
    "pink": "from-pink-500 to-pink-700",
    "blue": "from-blue-500 to-blue-700",
    "purple":"from-purple-500 to-purple-700",
    "orange":"from-orange-500 to-orange-700"
}


export default function StatusCard({
    color,
    icon,
    title,
    cant = 0
}) {
    return (
        <div className="px-4 mb-10">
            <Card className='w-full bg-white rounded-xl overflow-hdden shadow-md p-4'>
                <div
                    className="flex flex-wrap border-b border-gray-200"
                >
                    <div
                        className={`bg-gradient-to-tr ${colors[color]} -mt-10 mb-4 rounded-xl text-white grid items-center w-24 h-24 py-4 px-4 justify-center shadow-lg-${color}`}
                    >
                        <span className="material-icons text-white text-3xl leading-none">{icon}</span>
                    </div>

                    <div
                        className='w-full pl-4 max-w-full flex-grow flex-1 mb-2 text-right'
                    >
                        <h5 className="text-gray-500 font-light tracking-wide text-base mb-1">{title}</h5>
                        <span className="text-3xl text-gray-900">{cant}</span>
                    </div>                   
                </div>

               {/*  <div className='text-sm text-gray-700 pt-4 flex items-center'>
                    <span className="material-icons text-green-500 text-base leading-none">arrow_upward</span>
                    <span className="text-green-500 ml-1 mr-2">3.48</span>
                    <span className="font-light whitespace-nowrap">Since last month</span>
                </div> */}
            </Card>
        </div>
    );
}
