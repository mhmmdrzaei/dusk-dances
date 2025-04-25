import { CogIcon, LemonIcon, CaseIcon, BillIcon, CubeIcon,BugIcon} from '@sanity/icons';
import { structureTool } from 'sanity/structure';

export const myStructure = (S) => {
  return S.list()
    .title('Dusk Dances')
    .items([
      ...S.documentTypeListItems()
        .reverse()
        .filter((listItem) => {
          const id = listItem.getId();
          if (!id) return true;
          return !['page', 'siteSettings', 'seasons', 'staff', "seasonLocations","news"].includes(id);
        }),

      // Pages
      S.listItem()
        .title('Pages')
        .icon(LemonIcon)
        .child(S.documentTypeList('page')),

      // Seasons
      S.listItem()
        .title('Seasons')
        .icon(BugIcon)
        .child(S.documentTypeList('seasons')),
    // Locations
      S.listItem()
        .title('Season Locations')
        .icon(CubeIcon)
        .child(S.documentTypeList('seasonLocations')),
    // news
    S.listItem()
    .title('Calls & News')
    .icon(BillIcon)
    .child(S.documentTypeList('news')),
     // Staff
      S.listItem()
        .title('Staff & Board')
        .icon(CaseIcon)
        .child(S.documentTypeList('staff')),

      // Site Settings
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
    ]);
};
