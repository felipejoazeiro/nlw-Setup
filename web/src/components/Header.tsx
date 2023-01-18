import '../styles/global.css'
import logoImage from '../assets/logo.svg'
import { Plus } from 'phosphor-react'

export function Header(){
    return(
        <div className='w-full max-w-3x1 mx-auto flex justify-between'>
        <img src={logoImage} alt="Habits" />
        <button type="button" 
                className='border border-violet-500 font-semibold rounded-lg px-6 py- flex items-center gap-3 hover:border-violet-300 '>
          <Plus size={20} className="text-violet-500" />
          Novo hábito
          </button>
        </div>
    )
}