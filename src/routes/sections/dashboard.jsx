import { lazy, Suspense } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('src/pages/app/dashboard'));
const Workflow = lazy(() => import('src/pages/app/workflow'));
const History = lazy(() => import('src/pages/app/historys'));
const SettingsLayout = lazy(() => import('src/pages/app/settings'));
const TaskSummaryPage = lazy(() => import('src/sections/settings//all_Pages/page_task-summary'));
const ConnectionsPage = lazy(() => import('src/sections/settings//all_Pages/page_connections'));
const VariablesPage = lazy(() => import('src/sections/settings//all_Pages/page_variables'));
const TeamMembersPage = lazy(() => import('src/sections/settings//all_Pages/page_team-members'));
const APIWebhooksPage = lazy(() => import('src/sections/settings//all_Pages/page-api-webhooks'));
const TimeZonePage = lazy(() => import('src/sections/settings//all_Pages/page_time-zone'));
const AgencyTasksPage = lazy(() => import('src/sections/settings//all_Pages/page_agency-tasks'));


// const TaskUsage = lazy(() => import('src/sections/history/task-usage_page'));

// const TimeZone = lazy(() => import('src/pages/app/time-zone'));
const GetHelp = lazy(() => import('src/pages/app/get-help'));
// const AgentQueue = lazy(() => import('src/pages/app/agent-queue'));
// const Templates = lazy(() => import('src/pages/app/templates'));
// const AddTemplate = lazy(() => import('../../sections/templates/add-template'));
// const Broadcast = lazy(() => import('src/pages/app/broadcast'));
// const AddBroadcast = lazy(() => import('../../sections/broadcast/add-broadcast'));
// const Flows = lazy(() => import('src/pages/app/flows'));
// const CreateFlow = lazy(() => import('../../sections/flow-builder/create-flow'));
// const TaskSummary = lazy(() => import('src/pages/app/task-summary'));
// const Connections = lazy(() => import('src/pages/app/connections'));
// const Userattributes = lazy(() => import('src/pages/app/variables'));
// const Tags = lazy(() => import('src/pages/app/tags'));
// const Quickreplies = lazy(() => import('src/pages/app/quick-replies'));
// const Teammembers = lazy(() => import('src/pages/app/team-members'));
// const Chatassignmentrules = lazy(() => import('src/pages/app/chat-assignment-rules'));
// const ConfigureSLAs = lazy(() => import('src/pages/app/configure-slas'));
// const WhatsAppwidgets = lazy(() => import('src/pages/app/whatsapp-widget'));
// const APIWebhooks = lazy(() => import('src/pages/app/api-&-webhooks'));
// const ActivityLogs = lazy(() => import('src/pages/app/activity-logs'));
// const Notificationpreferences = lazy(() => import('src/pages/app/connections'));

// ----------------------------------------------------------------------

const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

export const dashboardRoutes = [
  {
    path: 'app',
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      { element: <IndexPage />, index: true },
      { path: 'workflow', element: <Workflow /> },
      { path: 'history', element: <History /> },
      {
        path: 'setting',
        element: <SettingsLayout />,
        children: [
          { path: '', element: <Navigate to="agency-tasks" replace /> },
          { path: 'task-summary', element: <TaskSummaryPage /> },
          { path: 'connections', element: <ConnectionsPage /> },
          { path: 'variables', element: <VariablesPage /> },
          { path: 'team-members', element: <TeamMembersPage /> },
          { path: 'api-webhooks', element: <APIWebhooksPage /> },
          { path: 'time-zone', element: <TimeZonePage /> },
          { path: 'agency-tasks', element: <AgencyTasksPage /> },
        ],
      },

      // { path: 'history/taskusage', element: <TaskUsage /> },
      // { path: 'agentQueue', element: <AgentQueue /> },
      // { path: 'template', element: <Templates /> },
      // { path: 'template/addtemplate', element: <AddTemplate /> },
      // { path: 'broadcast', element: <Broadcast /> },
      // { path: 'broadcast/addbroadcast', element: <AddBroadcast /> },
      // { path: 'flows', element: <Flows /> },
      // { path: 'flows/createflow', element: <CreateFlow /> },

      {
        path: 'group',
        children: [
          // { element: <TaskSummary />, index: true },
          // { path: 'connections', element: <Connections /> },
          // { path: 'variables', element: <Userattributes /> },
          // { path: 'tags', element: <Tags /> },
          // { path: 'quickreplies', element: <Quickreplies /> },
          // { path: 'teammembers', element: <Teammembers /> },
          // { path: 'chatassignmentrules', element: <Chatassignmentrules /> },
          // { path: 'configureslas', element: <ConfigureSLAs /> },
          // { path: 'whatsAppwidget', element: <WhatsAppwidgets /> },
          // { path: 'apiwebhooks', element: <APIWebhooks /> },
          // { path: 'activitylogs', element: <ActivityLogs /> },
          // { path: 'notificationpreferences', element: <Notificationpreferences /> },
          // { path: 'timezone', element: <TimeZone /> },
        ],
      },
      { path: 'gethelp', element: <GetHelp /> },
    ],
  },
];
