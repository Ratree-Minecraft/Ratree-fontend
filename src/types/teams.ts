type team = [
    name: string,
    img: string,
    role: string,
    social: string, // comma-separated list of social platforms
    github?: string,
    facebook?: string,
    youtube?: string,
    line?: string
]

type iconMap = {
    [key: string]: any
}