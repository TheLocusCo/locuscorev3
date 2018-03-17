class Ability
  include CanCan::Ability

  def initialize(user)
    alias_action :create, :new, to: :create_new
    alias_action :edit, :update, to: :edit_update
    # Define abilities for the passed in user here. For example:
    #
    #   user ||= User.new # guest user (not logged in)
    #   if user.admin?
    #     can :manage, :all
    #   else
    #     can :read, :all
    #   end
    #
    # The first argument to `can` is the action you are giving the user
    # permission to do.
    # If you pass :manage it will apply to every action. Other common actions
    # here are :read, :create, :update and :destroy.
    #
    # The second argument is the resource the user can perform the action on.
    # If you pass :all it will apply to every resource. Otherwise pass a Ruby
    # class of the resource.
    #
    # The third argument is an optional hash of conditions to further filter the
    # objects.
    # For example, here the user can only update published articles.
    #
    #   can :update, Article, :published => true
    #
    # See the wiki for details:
    # https://github.com/CanCanCommunity/cancancan/wiki/Defining-Abilities

    user ||= User.new # guest user (not logged in)

    can :read, Post
    can :read, Comment
    can :create_new, Comment
    can :read, Project
    can :show_image, Medium, globally_visible: true
    can :show_download, Medium, globally_visible: true
    can :read, Resume, company: 'thelocusco'
    can :read, Category
    can :read, Graphic
    can :create_new, Notification
    #user has basic perms and access to all controllers that dont require perms

    unless user.id.nil?
      can :create_new, Post
      can :edit_update, Post, author_id: user.id
      can :edit_update, Comment, user_id: user.id

      can :read, Project

      can :manage, Category

      can :read, User, id: user.id
      can :edit_update, User, id: user.id
      can :read, Role, id: user.role_id
      cannot :edit_update, :user, [:failed_attempts, :locked_at]

      can :create_new, Medium
      can :read, Medium
      can :edit_update, Medium, user_id: user.id
      can :destroy, Medium, user_id: user.id

      cannot :destroy, User, id: user.id

      unless user.role_id.nil?
        can(:create_new, User) if user.role.pf_users.include?('c')
        can(:read, User) if user.role.pf_users.include?('r')
        can(:edit_update, User) if user.role.pf_users.include?('u')
        can(:destroy, User) if user.role.pf_users.include?('d')

        can(:create_new, Post) if user.role.pf_posts.include?('c')
        can(:edit_update, Post) if user.role.pf_posts.include?('u')
        can(:destroy, Post) if user.role.pf_posts.include?('d')

        can(:create_new, Graphic) if user.role.pf_graphics.include?('c')
        can(:edit_update, Graphic) if user.role.pf_graphics.include?('u')
        can(:destroy, Graphic) if user.role.pf_graphics.include?('d')

        can(:create_new, Project) if user.role.pf_projects.include?('c')
        can(:edit_update, Project) if user.role.pf_projects.include?('u')
        can(:destroy, Project) if user.role.pf_projects.include?('d')

        can(:create_new, Resume) if user.role.pf_resumes.include?('c')
        can(:read, Resume) if user.role.pf_resumes.include?('r')
        can(:edit_update, Resume) if user.role.pf_resumes.include?('u')
        can(:destroy, Resume) if user.role.pf_resumes.include?('d')

        can(:create_new, Role) if user.role.pf_roles.include?('c')
        can(:read, Role) if user.role.pf_roles.include?('r')
        can(:edit_update, Role) if user.role.pf_roles.include?('u')
        can(:destroy, Role) if user.role.pf_roles.include?('d')

        can(:edit_update, Comment) if user.role.pf_comments.include?('u')
        can(:destroy, Comment) if user.role.pf_comments.include?('d')

        can(:create_new, Manga) if user.role.pf_mangas.include?('c')
        can(:read, Manga) if user.role.pf_mangas.include?('r')
        can(:edit_update, Manga) if user.role.pf_mangas.include?('u')
        can(:destroy, Manga) if user.role.pf_mangas.include?('d')

        can(:edit_update, Medium) if user.role.pf_media.include?('u')
        can(:destroy, Medium) if user.role.pf_media.include?('d')
      end
    end
  end
end
