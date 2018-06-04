
export const resumeHost = () => {
  if (process.env.NODE_ENV === 'production') {
    return "https://resumes.thelocus.co"
  } else {
    return `${process.env.REACT_APP_BASE_ENDPOINT}:${process.env.REACT_APP_RESUMES_PORT}`
  }
}

export const apiUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return "https://thelocus.co"
  } else {
    return `${process.env.REACT_APP_BASE_ENDPOINT}:${process.env.REACT_APP_API_PORT}`
  }
}
