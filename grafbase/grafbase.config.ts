import { g, auth, config } from '@grafbase/sdk'

//@ts-ignore
const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.email().unique(),
  avatar: g.url(),
  description: g.string(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(() => Project).list().optional(),
}).auth((rules) => { rules.public().read })

//@ts-ignore
const Project = g.model('Project', {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createBy: g.relation(() => User)
}).auth((rules) => {
  rules.public().read(),
    rules.private().create().delete().update()
})

const jwt = auth.JWT({
  issuer: 'grafbase',
  secret: 'aqSnLt1BsrdOn3Pw0tae7f+YUrKTs93AW6OfA52/+rQ='
})

export default config({
  schema: g,

  auth: {
    providers: [jwt],
    rules: (rules) => rules.private()
  }
})
