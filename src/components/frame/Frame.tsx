const Frame = ({ title }: { title: string }) => {
  const data = [
    {
      stack: 'Frontend',
      title: 'SCMNS Website Redesign',
      description: 'Transforming EcoEats\' social media presence with a focus on eco-friendly.',
      link: 'https://github.com/oluwoleadetifa/scmns-website',
      image: 'https://themewagon.com/themes/grad-school-free-bootstrap-4-html5-educational-website-template/'
    },{
      stack: 'Frontend',
      title: 'TREM Baltimore Website',
      description: 'Transforming EcoEats\' social media presence with a focus on eco-friendly.',
      link: 'https://www.trembaltimore.org/',
      image: 'https://themewagon.com/themes/grad-school-free-bootstrap-4-html5-educational-website-template/'
    },{
      stack: 'Frontend',
      title: 'T.O. Collections',
      description: 'Transforming your social media presence with a simple website',
      link: 'https://tocollections.com/',
      image: 'https://themewagon.com/themes/grad-school-free-bootstrap-4-html5-educational-website-template/'
    },
    {
      stack: 'Frontend',
      title: 'SCMNS Website Redesign',
      description: 'Transforming EcoEats\' social media presence with a focus on eco-friendly.',
      link: 'https://github.com/oluwoleadetifa/scmns-website',
      image: 'https://themewagon.com/themes/grad-school-free-bootstrap-4-html5-educational-website-template/'
    },{
      stack: 'Frontend',
      title: 'SCMNS Website Redesign',
      description: 'Transforming EcoEats\' social media presence with a focus on eco-friendly.',
      link: 'https://github.com/oluwoleadetifa/scmns-website',
      image: 'https://themewagon.com/themes/grad-school-free-bootstrap-4-html5-educational-website-template/'
    },{
      stack: 'Frontend',
      title: 'SCMNS Website Redesign',
      description: 'Transforming EcoEats\' social media presence with a focus on eco-friendly.',
      link: 'https://github.com/oluwoleadetifa/scmns-website',
      image: 'https://themewagon.com/themes/grad-school-free-bootstrap-4-html5-educational-website-template/'
    },
  ]

  return (
    <div className='w-full rounded-3xl '>
      <div>
        {data.map((data) => <div>{data.description}</div>)}
      </div>
      <div>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default Frame