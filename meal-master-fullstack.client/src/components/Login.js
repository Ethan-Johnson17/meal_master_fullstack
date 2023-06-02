import { observer } from "mobx-react-lite"
import React, { useState } from "react"
import { useUser } from '@auth0/nextjs-auth0/client'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap"
import Link from "next/link.js"

function Login() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isLoading } = useUser()
  const toggle = () => setIsOpen(!isOpen)


  return (
    <div>
      {!user && (
        <>
          <a href="/api/auth/login"
            className="btn btn-primary btn-margin">
            Log in</a>
        </>
      )}
      {user && (
        <>
          <UncontrolledDropdown inNavbar>
            <DropdownToggle nav caret >
              <img
                src={user.picture}
                alt="Profile"
                className="nav-user-profile rounded-circle"
                width="50"
                height="50"
              />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>
                {user.name}
              </DropdownItem>
              <DropdownItem >
                <Link href="/profile">
                  Profile
                </Link>
              </DropdownItem>
              <DropdownItem>
                <a href="/api/auth/logout">
                  Log out
                </a>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </>
      )}

    </div>
  )
}

export default observer(Login)