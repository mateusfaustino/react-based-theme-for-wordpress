import React from 'react'
import Container from './styles'
import Link from '@frontity/components/link'
import en from './en.png'
import ptbr from './pt-br.svg'


const LanguageWidget = ({languages}) => {
    return(
        <Container>
          {languages.map((language)=>{
              if (language.language=='en'){
                return(
                    <Link link={language.name}>
                          <img src={en}/>
                    </Link>
                  )
              }else if (language.language=='pt-br'){
                return(
                    <Link link={language.name}>
                          <img src={ptbr}/>
                    </Link>
                )
              }
              
          })}
        </Container>
    )
}
export default LanguageWidget