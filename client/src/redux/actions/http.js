function fetchAPIURL() {
  if (process.env.NODE_ENV === 'production') {
    return "https://thelocus.co"
  } else {
    return `${process.env.REACT_APP_BASE_ENDPOINT}:${process.env.REACT_APP_API_PORT}`
  }
}

export function categoriesFetch(type) {
  switch (type) {
    case "all":
      return fetch(`${fetchAPIURL()}/api/categories?type=${type}`)
    default:
      return fetch(`${fetchAPIURL()}/api/categories?type=${type}&mode=withAllCat`)
  }
}

export function commentFetch(id) {
  return fetch(`${fetchAPIURL()}/authed/comments/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}` || ""
    }
  })
}

export function commentsFetch(page) {
  return fetch(`${fetchAPIURL()}/authed/comments?page=${page}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}` || ""
    }
  })
}

export function graphicsFetch(page) {
  return fetch(`${fetchAPIURL()}/api/graphics?page=${page}`)
}

export function graphicFetch(id) {
  return fetch(`${fetchAPIURL()}/api/graphics/${id}`)
}

export function mangaFetch(id) {
  return fetch(`${fetchAPIURL()}/authed/mangas/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}` || ""
    }
  })
}

export function mangasFetch(mode, page) {
  return fetch(`${fetchAPIURL()}/authed/mangas?page=${page}&mode=${mode}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}` || ""
    }
  })
}

export function mediumFetch(id) {
  return fetch(`${fetchAPIURL()}/authed/media/${id}?mode=standard`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}` || ""
    }
  })
}

export function mediaFetch(mode, page) {
  return fetch(`${fetchAPIURL()}/authed/media?page=${page}&mode=${mode}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}` || ""
    }
  })
}

export function notificationFetch(id) {
  return fetch(`${fetchAPIURL()}/authed/notifications/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}` || ""
    }
  })
}

export function notificationsFetch(page) {
  return fetch(`${fetchAPIURL()}/authed/notifications?page=${page}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}` || ""
    }
  })
}

export function postsFetch(fetchMode, page) {
  return fetch(`${fetchAPIURL()}/api/posts?mode=${fetchMode}&page=${page}`)
}

export function postFetch(id) {
  return fetch(`${fetchAPIURL()}/api/posts/${id}`)
}

export function projectsFetch(fetchMode, page) {
  return fetch(`${fetchAPIURL()}/api/projects?mode=${fetchMode}&page=${page}`)
}

export function projectFetch(id) {
  return fetch(`${fetchAPIURL()}/api/projects/${id}`)
}

export function resourcesFetch(resourceType, currentPage) {
  switch (resourceType) {
    case "graphics": case "posts":
      return fetch(`${fetchAPIURL()}/api/${resourceType}?page=${currentPage}`)
    case "projects":
      return fetch(`${fetchAPIURL()}/api/projects?mode=paginated&page=${currentPage}`)
    case "mangas":
      return fetch(`${fetchAPIURL()}/authed/${resourceType}?mode=paginated&page=${currentPage}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}` || ""
        }
      })
    default:
      return fetch(`${fetchAPIURL()}/authed/${resourceType}?page=${currentPage}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}` || ""
        }
      })
  }
}

export function resumeFetch(id) {
  return fetch(`${fetchAPIURL()}/authed/resumes/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}` || ""
    }
  })
}

export function resumesFetch(page) {
  return fetch(`${fetchAPIURL()}/authed/resumes?page=${page}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}` || ""
    }
  })
}

export function roleFetch(id) {
  return fetch(`${fetchAPIURL()}/authed/roles/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}` || ""
    }
  })
}

export function rolesFetch(page) {
  return fetch(`${fetchAPIURL()}/authed/roles?page=${page}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}` || ""
    }
  })
}

export function userFetch(id) {
  return fetch(`${fetchAPIURL()}/authed/users/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}` || ""
    }
  })
}

export function usersFetch(page) {
  return fetch(`${fetchAPIURL()}/authed/users?page=${page}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}` || ""
    }
  })
}

export function commentCreate(comment) {
  let resourceToSend = {}
  resourceToSend["comment"] = comment

  if(comment.user_id) {
    return fetch(`${fetchAPIURL()}/authed/comments`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}` || ""
      },
      body: JSON.stringify(resourceToSend)
    })
  } else {
    return fetch(`${fetchAPIURL()}/api/comments`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(resourceToSend)
    })
  }
}

export function notificationCreate(notification) {
  let resourceToSend = {}
  resourceToSend["notification"] = notification
  return fetch(`${fetchAPIURL()}/api/notifications`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(resourceToSend)
  })
}

export function userNotificationsFetch(userId) {
  return fetch(`${fetchAPIURL()}/authed/notifications?mode=forUser&forUser=${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}` || ""
    }
  })
}

export function resourceUpload(resourcePlural, resourceType, resource) {
  let form_data = new FormData()

  // Parse out the upload params from the standard object
  Object.keys(resource).forEach((key) => {
    if (resource[key] instanceof FileList) {
      form_data.append(`${resourceType}[${key}]`, resource[key][0], resource[key][0].name)
    }
  })

  return fetch(`${fetchAPIURL()}/authed/${resourcePlural}/${resource.id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.token}` || ""
    },
    body: form_data
  })
}

export function resourceCreate(resourcePlural, resourceType, resource) {
  let resourceToSend = {}
  resourceToSend[resourceType] = resource

  return fetch(`${fetchAPIURL()}/authed/${resourcePlural}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}` || ""
    },
    body: JSON.stringify(resourceToSend)
  })
}

export function resourceDestroy(resourcePlural, resource) {
  var resourceToSend = {}
  resourceToSend["id"] = resource.id

  return fetch(`${fetchAPIURL()}/authed/${resourcePlural}/${resource.id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.token}` || ""
    },
    body: JSON.stringify(resourceToSend)
  })
}

export function resourceFetch(resource, id) {
  return fetch(`${fetchAPIURL()}/authed/${resource}/${id}/edit`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}` || ""
    }
  })
}

export function resourceNewFetch(resource) {
  return fetch(`${fetchAPIURL()}/authed/${resource}/new`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}` || ""
    }
  })
}

export function resourcePatch(resourcePlural, resourceType, resource) {
  var resourceToSend = {}
  resourceToSend["id"] = resource.id
  resourceToSend[resourceType] = resource

  return fetch(`${fetchAPIURL()}/authed/${resourcePlural}/${resource.id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.token}` || ""
    },
    body: JSON.stringify(resourceToSend)
  })
}

export function showMediumFetch(id, type) {
  return fetch(`${fetchAPIURL()}/api/media/${id}/${type}`)
}

export function userAuth() {
  return fetch(`${fetchAPIURL()}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.token}` || ""
    }
  })
}

export function userLogin(user) {
  return fetch(`${fetchAPIURL()}/auth/sign_in`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password
    })
  })
}

export function userRoleFetch(user) {
  return fetch(`${fetchAPIURL()}/authed/roles/${user.role_id}`, {
    method: "GET",
    headers: {
      "access-token": localStorage.accessToken || "",
      "token-type":   "Bearer",
      "client":       localStorage.tokenClient || "",
      "expiry":       localStorage.tokenExpiry || "",
      "uid":          localStorage.uid || ""
    }
  })
}
