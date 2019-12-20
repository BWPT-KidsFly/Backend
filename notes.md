entities:
   - Hubs <-- like a channel
        - id
        - name
   - users
        - id
        - username
        - 
   - messages 
        - id
        - message
        - hubs_id
        - user_id
   - Hubs Users
        - id
        - hubs_id
        - user_id
   Relationships:
   - Hubs \*---\* Users
   - Hubs 1---\* Messages
   - Users 1 ---\* Messages


   