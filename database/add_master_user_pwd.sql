-- Add UserPWD column to MasterUser (required for login validation)
ALTER TABLE public."MasterUser"
  ADD COLUMN IF NOT EXISTS "UserPWD" character varying(50);

-- Optional sample data for testing login (OrgCode: SOFT, User: admin / admin123)
INSERT INTO public."MasterDesignation" ("DesignationId", "OrganizationId", "DesignationName", "DesignationShortName", "Remarks", "DOrder", "DOrder1", "MarkForDeletion")
SELECT 1, 1, 'Software Developer', 'SW-DEV', NULL, NULL, NULL, false
WHERE NOT EXISTS (SELECT 1 FROM public."MasterDesignation" WHERE "DesignationId" = 1);

INSERT INTO public."MasterUser" ("UserCategoryId", "OrganizationId", "DesignationId", "UserLoginName", "UserName", "UserPWD", "MarkForDeletion")
SELECT 1, 1, 1, 'admin', 'System Administrator', 'admin123', false
WHERE NOT EXISTS (
  SELECT 1 FROM public."MasterUser"
  WHERE "OrganizationId" = 1 AND UPPER("UserLoginName") = UPPER('admin')
);
